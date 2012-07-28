When /^I go to the list of contacts$/ do
  visit root_path
end

Then /^there should be (\d+) contacts$/ do |number|
  page.all('#contacts_list li').length.should eq number.to_i
end

Then /^I should( not)? see a (.+) message$/ do |negation, message_class|
  msg = page.find(".#{message_class}")
  negation ? msg.should_not(be_visible) : msg.should(be_visible)
end

Then /^I should see (.+\/?.+) buttons for each contact$/ do |labels|
  page.all('#contacts_list li').each do |li|
    labels.split('/').each do |label|
      li.text.should match label
    end
  end
end
