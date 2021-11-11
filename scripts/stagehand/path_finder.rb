module Stagehand
  module PathFinder
    module_function

    def component_path(component_type:, component_name:, component_category:)
      "./src/components/#{component_type}/#{component_category}/#{component_name}.jsx"
    end

    def story_path(component_type:, component_name:, component_category:)
      "./src/components/#{component_type}/#{component_category}/#{component_name}.stories.jsx"
    end

    def custom_components_path
      "scripts/temp/custom_components.txt"
    end

    def custom_component_path
      "scripts/temp/custom_component.html"
    end
  end
end
