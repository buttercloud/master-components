module Stagehand
  module JSXMender
    module_function

    def curaja(doc)
      doc = cure_style(doc)
      doc = cure_styles(doc)
      doc = cure_img(doc)
      doc = cure_brackets(doc)
      doc = cure_src(doc)
      doc = cure_alt(doc)
      doc
    end

    def cure_style(html)
      puts "Repairing style prop for jsx...".magenta

      html.gsub(/style\=\'(.*)\'/) {|match| "style={#{$1}}".gsub(" ", '')}
    end

    def cure_styles(html)
      puts "Repairing styles prop for jsx...".magenta

      html.gsub(/styles\=(\".*\")/ix) {|match| "styles=#{$1.gsub("\"", '')}"}
    end

    def cure_img(html)
      puts "Reparing image tags...".magenta
      html.gsub(/<img.*(>)/) { |match| match.gsub($1, "/>") }
    end

    def cure_brackets(html)
      puts "Reparing encoded brackets...".magenta

      html = html.gsub(/\%7B/, "{")
      html = html.gsub(/\%7D/, "}")

      html
    end

    def cure_src(html)
      puts "Repairing src prop for jsx...".magenta
      html.gsub(/src\=(\".*\")/ix) {|match| "src=#{$1.gsub("\"", '')}"}
    end

    def cure_alt(html)
      puts "Reparing alt prop for jsx...".magenta
      html.gsub(/alt\=(\".*\")/ix) {|match| "alt=#{$1.gsub("\"", '')}"}
    end

    # def cure_name(html)
    #   puts "Reparing name prop for jsx...".magenta
    #   html.gsub(/name\=(\".*\")/ix) {|match| "name=#{$1.gsub("\"", '')}"}
    # end
  end
end
