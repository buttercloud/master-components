module Stagehand
  module Builder
    module_function

    def build_component(
      path:,
      component_name:,
      html: nil,
      custom_styled_components_import: nil,
      custom_prop_types_import: nil,
      prop_destructuring: nil,
      default_prop_types: nil,
      prop_types: nil
    )
      puts "Building Component...".magenta
      puts "- path: #{path}".blue

      File.open(path, "w") do |f|
        f.write("import React from 'react';\n")
        f.write("// import PropTypes from 'prop-types';\n")
        f.write("// import styled from 'styled-components';\n")
        f.write("import #{component_name}Icon from './#{component_name}.icon';\n")
        f.write(custom_styled_components_import)
        f.write(custom_prop_types_import)
        f.write("\n")
        f.write("const #{component_name} = (props) => {\n")
        f.write(prop_destructuring)
        f.write("\n")
        f.write("  return (\n")
        f.write(html)
        f.write("  );\n")
        f.write("};\n")
        f.write("\n")
        f.write("#{component_name}.icon = #{component_name}Icon;\n")
        f.write("\n")
        f.write(default_prop_types)
        f.write(prop_types)
        f.write("export default #{component_name};\n")
      end
    end

    def build_story(path:, component_name:, component_type:, component_category:)
      puts "Building Story...".magenta
      puts "- path: #{path}".blue

      File.open(path, "w") do |f|
        f.write("import React from 'react';\n")
        f.write("import #{component_name} from './#{component_name}';\n")
        f.write("\n")
        f.write("export default {\n")
        f.write("  title: '#{component_type}/#{component_category}/#{component_name}',\n")
        f.write("  component: #{component_name},\n")
        f.write("};\n")
        f.write("\n")
        f.write("const Template = (args) => <#{component_name} {...args} />;\n")
        f.write("\n")
        f.write("export const Primary = Template.bind({});\n")
        f.write("\n")
        f.write("Primary.storyName = '#{component_name}';\n")
        f.write("// Primary.args = {};\n")
      end
    end
  end
end
