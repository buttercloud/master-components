#
## Components importer script
# ruby import_components type:organisms category:blog
#

require "./scripts/stagehand/args_handler"
require "./scripts/stagehand/path_finder"

# Filter args
args = Stagehand::ARGSHandler.filter(ARGV)

custom_components_path = Stagehand::PathFinder.custom_components_path

custom_component_path = Stagehand::PathFinder.custom_component_path

text = File.read(custom_components_path)

components = text.split("----------")

components.each do |component|
  random_number = rand(9999).to_s

  while random_number.length < 4
    random_number = "0" + random_number
  end

  File.open(custom_component_path, "w") do |f|
    f.rewind
    f.write(component)
    f.truncate(f.pos)
  end

  custom_name = "#{args[:component_category].capitalize}#{random_number}"

  system("ruby scripts/import_component.rb type:#{args[:component_type]} category:#{args[:component_category]} name:#{custom_name}")
end
