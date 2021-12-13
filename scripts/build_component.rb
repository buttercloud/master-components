#
## Component builder script
# ruby build_component type:organisms name:ProductDetails
#

require "./scripts/stagehand/builder"
require "./scripts/stagehand/painter"
require "./scripts/stagehand/args_handler"
require "./scripts/stagehand/path_finder"

# Filter args
args = Stagehand::ARGSHandler.filter(ARGV)

# Validate args
Stagehand::ARGSHandler.validate(args)

component_path = Stagehand::PathFinder.component_path(
  component_type: args[:component_type],
  component_name: args[:component_name]
)

story_path = Stagehand::PathFinder.story_path(
  component_type: args[:component_type],
  component_name: args[:component_name]
)

# Build component
Stagehand::Builder.build_component(
  path: component_path,
  component_name: args[:component_name]
)

# Build story
Stagehand::Builder.build_story(
  path: story_path,
  component_name: args[:component_name],
  component_type: args[:component_type]
)

puts "Done".green
