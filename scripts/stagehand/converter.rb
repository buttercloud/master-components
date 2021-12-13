module Stagehand
  module Converter
    module_function

    def convert_style_to_object(doc)
      puts "Converting style prop from string to object...".magenta

      doc.xpath(".//@style").each do |elem|
        res = {}
        old_styles = elem.value.split(';')

        old_styles.each do |old_style|
          key_val = old_style.split(':')
          key = key_val.first
          value = key_val[1]

          if key_val.length <= 1
            next
          end

          res[key.strip] = value.strip
        end

        elem.value = res.to_json
      end
    end

    def convert_elements_to_styled_elements(doc)
      puts "Converting elements to styled jsx elements...".magenta

      custom_props = {}

      # Convert root element with StyledContainer
      doc.xpath('.//*').first.name = "StyledContainer"
      doc.xpath('.//StyledContainer').each do |elem|
        random_hex = SecureRandom.hex(3)
        custom_id = "background#{random_hex}"
        elem['id'] = "#{custom_id}"
        elem['styles'] = "{#{custom_id}.styles}"

        custom_props[custom_id] = {
          type: 'background',
          comment: "Background prop for #{custom_id}"
        }
      end

      # Adds text props to a text element
      fill_in_text_props = -> (elem, custom_id) {
        elem['id'] = "#{custom_id}"
        elem['styles'] = "{#{custom_id}.styles}"
        # elem.inner_html = "{#{custom_id}.text}"

        custom_props[custom_id] = {
          type: 'text',
          comment: "Text prop for #{custom_id}"
        }
      }

      # Adds img props to an img element
      fill_in_img_props = -> (elem, custom_id) {
        elem['id'] = "'#{custom_id}'"
        elem['styles'] = "{#{custom_id}.styles}"
        elem['src'] = "{#{custom_id}.src}"
        elem['alt'] = "{#{custom_id}.alt}"

        custom_props[custom_id] = {
          type: 'image',
          comment: "Image prop for #{custom_id}"
        }
      }

      # Adds button props to button element
      fill_in_button_props = -> (elem, custom_id) {
        elem['id'] = "#{custom_id}"
        elem['styles'] = "{#{custom_id}.styles}"
        elem['onClick'] = "{#{custom_id}.onClick}"
        # elem.inner_html = "{#{custom_id}.text}"

        custom_props[custom_id] = {
          type: 'button',
          comment: "Button prop for #{custom_id}"
        }
      }

      # Adds textarea props to textarea elements
      fill_in_textarea_props = -> (elem, custom_id) {
        elem['id'] = "#{custom_id}"
        elem['styles'] = "{#{custom_id}.styles}"
        elem['placeholder'] = "{#{custom_id}.placeholder}"
        elem['maxlength'] = "{#{custom_id}.maxLength}"
        elem['minlength'] = "{#{custom_id}.minLength}"
        elem['name'] = "{#{custom_id}.name}"
        elem['required'] = "{#{custom_id}.required}"

        custom_props[custom_id] = {
          type: 'textarea',
          comment: "Textarea prop for #{custom_id}"
        }
      }

      # Adds input props to input elements
      fill_in_input_props = -> (elem, custom_id) {
        elem['id'] = "#{custom_id}"
        elem['styles'] = "{#{custom_id}.styles}"
        elem['placeholder'] = "{#{custom_id}.placeholder}"
        elem['maxlength'] = "{#{custom_id}.maxLength}"
        elem['minlength'] = "{#{custom_id}.minLength}"
        elem['name'] = "{#{custom_id}.name}"
        elem['required'] = "{#{custom_id}.required}"
        elem['value'] = "{#{custom_id}.value}"
        elem['onChange'] = "{#{custom_id}.onChange}"

        custom_props[custom_id] = {
          type: 'input',
          comment: "Input prop for #{custom_id}"
        }
      }

      # Replace most elements with styled elements

      doc.xpath('.//h1').each do |elem|
        elem.name = "StyledH1"
        random_hex = SecureRandom.hex(3)
        custom_id = "h1#{random_hex}"

        fill_in_text_props.call(elem, custom_id)
      end

      doc.xpath('.//h2').each do |elem|
        elem.name = "StyledH2"
        random_hex = SecureRandom.hex(3)
        custom_id = "h2#{random_hex}"

        fill_in_text_props.call(elem, custom_id)
      end

      doc.xpath('.//h3').each do |elem|
        elem.name = "StyledH3"
        random_hex = SecureRandom.hex(3)
        custom_id = "h3#{random_hex}"

        fill_in_text_props.call(elem, custom_id)
      end

      doc.xpath('.//h4').each do |elem|
        elem.name = "StyledH4"
        random_hex = SecureRandom.hex(3)
        custom_id = "h4#{random_hex}"

        fill_in_text_props.call(elem, custom_id)
      end

      doc.xpath('.//h5').each do |elem|
        elem.name = "StyledH5"
        random_hex = SecureRandom.hex(3)
        custom_id = "h5#{random_hex}"

        fill_in_text_props.call(elem, custom_id)
      end

      doc.xpath('.//h6').each do |elem|
        elem.name = "StyledH6"
        random_hex = SecureRandom.hex(3)
        custom_id = "h6#{random_hex}"

        fill_in_text_props.call(elem, custom_id)
      end

      doc.xpath('.//p').each do |elem|
        elem.name = "StyledParagraph"
        random_hex = SecureRandom.hex(3)
        custom_id = "p#{random_hex}"

        fill_in_text_props.call(elem, custom_id)
      end

      doc.xpath('.//span').each do |elem|
        elem.name = "StyledSpan"
        random_hex = SecureRandom.hex(3)
        custom_id = "span#{random_hex}"

        fill_in_text_props.call(elem, custom_id)
      end

      doc.xpath('.//label').each do |elem|
        elem.name = "StyledLabel"
        random_hex = SecureRandom.hex(3)
        custom_id = "label#{random_hex}"

        fill_in_text_props.call(elem, custom_id)
      end

      doc.xpath('.//img').each do |elem|
        elem.name = "StyledImage"
        random_hex = SecureRandom.hex(3)
        custom_id = "img#{random_hex}"

        fill_in_img_props.call(elem, custom_id)
      end

      doc.xpath('.//button').each do |elem|
        elem.name = "StyledButton"
        random_hex = SecureRandom.hex(3)
        custom_id = "button#{random_hex}"

        fill_in_button_props.call(elem, custom_id)
      end

      doc.xpath('.//a').each do |elem|
        elem.name = "StyledButton"
        random_hex = SecureRandom.hex(3)
        custom_id = "button#{random_hex}"

        fill_in_button_props.call(elem, custom_id)
      end

      doc.xpath('.//textarea').each do |elem|
        elem.name = "StyledTextarea"
        random_hex = SecureRandom.hex(3)
        custom_id = "textarea#{random_hex}"

        fill_in_textarea_props.call(elem, custom_id)
      end

      doc.xpath('.//input').each do |elem|
        elem.name = "StyledInput"
        random_hex = SecureRandom.hex(3)
        custom_id = "input#{random_hex}"

        fill_in_input_props.call(elem, custom_id)
      end

      custom_props
    end
  end
end
