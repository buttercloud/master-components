module Stagehand
  module Generator
    module_function

    def generate_custom_styled_components_import(doc:)
      puts "Generating import statement for custom styled components...".magenta

      text = "import { "
      
      text += " StyledContainer, " if !doc.xpath('.//StyledContainer').empty?
      text += " StyledSpan, " if !doc.xpath('.//StyledSpan').empty?
      text += " StyledImage, " if !doc.xpath('.//StyledImage').empty?
      text += " StyledParagraph, " if !doc.xpath('.//StyledParagraph').empty?
      text += " StyledLabel, " if !doc.xpath('.//StyledLabel').empty?
      text += " StyledH1, " if !doc.xpath('.//StyledH1').empty?
      text += " StyledH2, " if !doc.xpath('.//StyledH2').empty?
      text += " StyledH3, " if !doc.xpath('.//StyledH3').empty?
      text += " StyledH4, " if !doc.xpath('.//StyledH4').empty?
      text += " StyledH5, " if !doc.xpath('.//StyledH5').empty?
      text += " StyledH6, " if !doc.xpath('.//StyledH6').empty?
      text += " StyledButton, " if !doc.xpath('.//StyledButton').empty?
      text += " StyledInput, " if !doc.xpath('.//StyledInput').empty?
      text += " StyledTextArea, " if !doc.xpath('.//StyledTextArea').empty?

      text += "} from '../../assets/customStyledComponents';\n"

      text
    end

    def generate_custom_prop_type_import(custom_props:)
      puts "Generating import statement for custom prop types...".magenta

      text = "import { "

      textType = custom_props.find { |_key, value| value[:type] == 'text' }
      text += " textType, " if textType

      backgroundType = custom_props.find { |_key, value| value[:type] == 'background' }
      text += " backgroundType, " if backgroundType

      imageType = custom_props.find { |_key, value| value[:type] == 'image' }
      text += " imageType, " if imageType

      buttonType = custom_props.find { |_key, value| value[:type] == 'button' }
      text += " buttonType, " if buttonType

      inputType = custom_props.find { |_key, value| value[:type] == 'input' }
      text += " inputType, " if inputType

      textareaType = custom_props.find { |_key, value| value[:type] == 'textarea' }
      text += " textareaType, " if textareaType

      text += "} from '../../../customPropTypes/customPropTypes';\n"

      text
    end

    def generate_props_destructuring(custom_props:)
      puts "Generating props destructuring...".magenta

      text = "const { "

      custom_props.each do |key, _value|
        text += "#{key}, "
      end

      text += "} = props;\n"

      text
    end

    def generate_default_prop_types(custom_props:, component_name:)
      puts "Generating default prop types...".magenta

      text = "#{component_name}.defaultProps = {\n"

      custom_props.each do |key, value|
        case value[:type]
        when 'text'
          text += " #{key}: {\n"
          text += "  text: 'Lorem ipsum',\n"
          text += "  styles: {},\n"
          text += " },\n"
        when "background"
          text += " #{key}: {\n"
          text += "  styles: {},\n"
          text += " },\n"
        when "image"
          text += " #{key}: {\n"
          text += "  styles: {},\n"
          text += "  src: 'https://place-hold.it/300.png',\n"
          text += "  alt: '',\n"
          text += " },\n"
        when "button"
          text += " #{key}: {\n"
          text += "  text: 'Lorem ipsum',\n"
          text += "  styles: {},\n"
          text += "  onClick: () => {},\n"
          text += " },\n"
        when "input"
          text += " #{key}: {\n"
          text += "  placeholder: 'Lorem ipsum',\n"
          text += "  styles: {},\n"
          text += " },\n"
        when "textarea"
          text += " #{key}: {\n"
          text += "  placeholder: 'Lorem ipsum',\n"
          text += "  styles: {},\n"
          text += " },\n"
        end
      end

      text += "};\n"
      text += "\n"

      text
    end

    def generate_prop_types(custom_props:, component_name:)
      puts "Generating prop types...".magenta

      text = "#{component_name}.propTypes = {\n"

      custom_props.each do |key, value|
        prop_type = case value[:type]
          when 'text'
            'textType'
          when 'background'
            'backgroundType'
          when 'image'
            'imageType'
          when 'button'
            'buttonType'
          when 'input'
            'inputType'
          when 'textarea'
            'textareaType'
        end

        text += "/**\n"
        text += " * #{value[:comment]}.\n"
        text += " */\n"
        text += " #{key}: #{prop_type},\n"
      end

      text += "};\n"
      text += "\n"

      text
    end
  end
end
