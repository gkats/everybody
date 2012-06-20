FactoryGirl.define do
  factory :contact do
    name 'John Doe'
    group 'family'
    address '5th Avenue, New York'
    notes 'Some notes for this contact'
  end
  
  factory :invalid_contact, class: Contact do
    name ''
    group 'friends'
  end
end