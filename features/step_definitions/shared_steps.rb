Given /^I have (\d+) (.+)s$/ do |number, model|
  create_list(model, number.to_i)
end

