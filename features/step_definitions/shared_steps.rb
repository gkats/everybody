Given /^I have (\d+) (.+)$/ do |number, model|
  create_list(model.singularize, number.to_i)
end

When /^I follow the (.+) link$/ do |link|
  click_link link
end
