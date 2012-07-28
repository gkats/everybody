FactoryGirl.define do
  factory :contact do
    sequence :name do |n| "Contact #{n}" end
    group 'family'
    address 'Fake Street'
    notes 'Some notes'
  end
end
