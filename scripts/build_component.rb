#
## Component builder script
# ruby build_component type:organisms name:ProductDetails
#

class String
  def red;     "\033[31m#{self}\033[0m" end
  def green;   "\033[32m#{self}\033[0m" end
  def blue;    "\033[34m#{self}\033[0m" end
  def magenta; "\033[35m#{self}\033[0m" end
end

type_key = 'type:'
name_key = 'name:'
component_type = ''
component_name = ''
available_types = ['atoms', 'molecules', 'organisms']

ARGV.each do |a|
  if a.include? type_key
    component_type = a.sub(type_key, "").downcase
  elsif a.include? name_key
    component_name = a.sub(name_key, "")
  end
end

if !available_types.include? component_type
  puts "Invalid type!".red
  puts "please choose one of these types:".red
  puts "[#{available_types.join(', ')}]".blue

  exit
end

if component_name.empty?
  puts "Please provide a name for the component.".red

  exit
end

component_path = "./src/components/#{component_type}/#{component_name}.jsx"
story_path = "./src/components/#{component_type}/#{component_name}.stories.jsx"

puts "Building Component...".magenta
puts "- path: #{component_path}".magenta

File.open(component_path, "w") do |f|
  f.write("import React from 'react';\n")
  f.write("// import PropTypes from 'prop-types';\n")
  f.write("import styled from 'styled-components';\n")
  f.write("import { StyledContainer } from '../assets/customStyledComponents';\n")
  f.write("import { backgroundType } from '../../customPropTypes/customPropTypes';\n")
  f.write("\n")
  f.write("const Container = styled(StyledContainer)``;\n")
  f.write("\n")
  f.write("const #{component_name} = (props) => {\n")
  f.write("  const { background } = props;\n")
  f.write("\n")
  f.write("  return (\n")
  f.write("    <Container backgroundColor={background.backgroundColor}>\n")
  f.write("      placeholder\n")
  f.write("    </Container>\n")
  f.write("  );\n")
  f.write("};\n")
  f.write("\n")
  f.write("#{component_name}.defaultProps = {\n")
  f.write("  background: {\n")
  f.write("    backgroundColor: 'white',\n")
  f.write("  },\n")
  f.write("};\n")
  f.write("\n")
  f.write("#{component_name}.propTypes = {\n")
  f.write("  /**\n")
  f.write("   * Background styles.\n")
  f.write("   */\n")
  f.write("  background: backgroundType,\n")
  f.write("};\n")
  f.write("\n")
  f.write("export default #{component_name};\n")
end

puts "Building Story...".magenta
puts "- path: #{story_path}".magenta

File.open(story_path, "w") do |f|
  f.write("import React from 'react';\n")
  f.write("import #{component_name} from './#{component_name}';\n")
  f.write("\n")
  f.write("export default {\n")
  f.write("  title: '#{component_type}/#{component_name}',\n")
  f.write("  component: #{component_name},\n")
  f.write("};\n")
  f.write("\n")
  f.write("const Template = (args) => <#{component_name} {...args} />;\n")
  f.write("\n")
  f.write("export const Primary = Template.bind({});\n")
  f.write("\n")
  f.write("// Primary.storyName = '';\n")
  f.write("// Primary.args = {};\n")
end

puts "Done".green
