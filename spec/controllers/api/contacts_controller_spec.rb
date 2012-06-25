describe ContactsController do
  let(:contact) { FactoryGirl.create(:contact) }
  
  it 'should create a new contact' do
    post '/contacts', contact.to_json
    Contact.first.to_json.should have_json_path('id')
  end
end
