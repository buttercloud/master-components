module Stagehand
  module ARGSHandler
    AVAILABLE_TYPES = ['atoms', 'molecules', 'organisms']
    TYPE_KEY = 'type:'
    NAME_KEY = 'name:'
    AVAILABLE_CATEGORIES = ['blog', 'contact', 'content', 
      'cta', 'ecommerce', 'feature', 'footer', 'gallery', 'header', 'hero', 'pricing', 'statistic', 'step', 'team', 'testimonial']
    CATEGORY_KEY = 'category:'

    module_function

    def filter(base_args)
      data = {}

      base_args.each do |arg|
        if arg.include? TYPE_KEY
          data[:component_type] = arg.sub(TYPE_KEY, "").downcase
        elsif arg.include? NAME_KEY
          data[:component_name] = arg.sub(NAME_KEY, "")
        elsif arg.include? CATEGORY_KEY
          data[:component_category] = arg.sub(CATEGORY_KEY, "")
        end
      end

      data
    end

    def validate(filtered_args)
      puts "Validating args...".magenta

      if !AVAILABLE_TYPES.include? filtered_args[:component_type]
        puts "Invalid type!".red
        puts "please choose one of these types:".blue
        puts "[#{AVAILABLE_TYPES.join(', ')}]".blue

        exit
      end

      if !filtered_args[:component_name] || filtered_args[:component_name].empty?
        puts "Please provide a name for the component.".red

        exit
      end

      if !AVAILABLE_CATEGORIES.include? filtered_args[:component_category]
        puts "Invalid category!".red
        puts "please choose one of these categories:".blue
        puts "[#{AVAILABLE_CATEGORIES.join(', ')}]".blue

        exit
      end
    end
  end
end
