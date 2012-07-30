require 'spec_helper'

describe ContactsController do
  before :each do
    create_list(:contact, 2)
  end

  it 'index should return all contacts' do
    get 'index', format: :json
    response.status.should eq 200
    JSON.parse(response.body).length.should eq 2
  end
end
