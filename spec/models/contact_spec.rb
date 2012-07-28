require 'spec_helper'

describe Contact do
  it 'requires a name' do
    contact = Contact.new(name: '')
    contact.should_not be_valid
    contact.errors.first.should include :name
    contact.name = 'Homer Simpson'
    contact.should be_valid
    contact.errors.should be_empty
  end
end
