FactoryGirl.define do
  factory :contact, class: Contact do
    sequence :name do |n| "Contact #{n}" end
    group 'family'
    address 'Elm Street'
    notes 'Just a friend'
  end
end
