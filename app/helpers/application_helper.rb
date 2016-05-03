module ApplicationHelper

  def ng_template(name)
    content_tag :script, type: 'text/ng-template', id: "#{name}.html" do
      render "angular/#{name}", layout: false
    end
  end

end
