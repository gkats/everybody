Given /^I have (\d+) (.+)$/ do |number, model|
  create_list(model.singularize, number.to_i)
end

When /^I fill in$/ do |table|
  table.hashes.each do |option|
    option.each do |key, value|
      begin
        input = page.find("input[name=#{key.downcase}]")
      rescue Capybara::ElementNotFound
        input = page.find("textarea[name=#{key.downcase}]")
      end
      input.set(value)
    end
  end
end

When /^I click (.+)$/ do |link|
  click_link_or_button link
end

Then /^page should( not)? have content (.+)$/ do |negation, content|
  negation ? page.should_not(have_content(content)) : page.should(have_content(content))
end
