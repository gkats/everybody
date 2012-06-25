FactoryGirl.define do
  factory :contact do
    name 'joe'
    group 'family'
    notes 'Full of notes'
    
    phone
  end
  
  factory :phone do
    type 'Mobile'
    number '6979999999'
  end
end
