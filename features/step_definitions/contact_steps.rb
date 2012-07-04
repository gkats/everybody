When /^I go to the list of contacts$/ do
  visit root_path
end

Then /^there should be (\d+) contacts$/ do |number|
  page.all('#contacts_list li').length.should eq number
end

