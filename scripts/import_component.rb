#
## Component importer script
# ruby import_component type:organisms category:blog name:ProductDetails
#

require "nokogiri"
require "JSON"
require "pry"
require "securerandom"
require "pty"
require "./scripts/stagehand/builder"
require "./scripts/stagehand/painter"
require "./scripts/stagehand/args_handler"
require "./scripts/stagehand/path_finder"
require "./scripts/stagehand/converter"
require "./scripts/stagehand/jsx_mender"
require "./scripts/stagehand/generator"

puts "Started importing a new component".blue

# Filter args
args = Stagehand::ARGSHandler.filter(ARGV)

# Validate args
Stagehand::ARGSHandler.validate(args)

custom_props = {}

component_path = Stagehand::PathFinder.component_path(
  component_type: args[:component_type],
  component_name: args[:component_name],
  component_category: args[:component_category]
)

story_path = Stagehand::PathFinder.story_path(
  component_type: args[:component_type],
  component_name: args[:component_name],
  component_category: args[:component_category]
)

text = File.read("scripts/temp/custom_component.html")

# Filter html
new_contents = text.gsub(/class/, "className")

doc = Nokogiri::XML.fragment(new_contents)

# Convert style from string to object
Stagehand::Converter.convert_style_to_object(doc)

# Convert html elements to styled jsx elements
styled_elements_props = Stagehand::Converter.convert_elements_to_styled_elements(doc)
custom_props.merge!(styled_elements_props)

# Generate custom styled components import statement
custom_styled_components_import_text = Stagehand::Generator.generate_custom_styled_components_import(
  doc: doc
)

# Convert style and styles
mended_doc = Stagehand::JSXMender.curaja(doc.to_html)

# Generate custom prop type import statement
custom_prop_types_import_text = Stagehand::Generator.generate_custom_prop_type_import(
  custom_props: custom_props
)

# Generate default prop types
default_prop_types_text = Stagehand::Generator.generate_default_prop_types(
  custom_props: custom_props,
  component_name: args[:component_name]
)

# Generate prop types
prop_types_text = Stagehand::Generator.generate_prop_types(
  custom_props: custom_props,
  component_name: args[:component_name]
)

# Generate props destructuring
prop_destructuring_text = Stagehand::Generator.generate_props_destructuring(
  custom_props: custom_props
)

# Build component
Stagehand::Builder.build_component(
  path: component_path,
  component_name: args[:component_name],
  html: mended_doc,
  custom_styled_components_import: custom_styled_components_import_text,
  custom_prop_types_import: custom_prop_types_import_text,
  prop_destructuring: prop_destructuring_text,
  default_prop_types: default_prop_types_text,
  prop_types: prop_types_text
)

# Build story
Stagehand::Builder.build_story(
  path: story_path,
  component_name: args[:component_name],
  component_type: args[:component_type],
  component_category: args[:component_category]
)

puts "Prettifying the code...".magenta
system("npx prettier #{component_path} --write")

puts "Fixing eslint errors...".magenta
system("yarn eslint #{component_path} --fix")

puts "Finished importing component #{args[:component_name]}".green
puts "Component path: #{component_path}".blue
puts "Story path: #{story_path}".blue
