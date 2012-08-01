class ContactsController < ApplicationController
  respond_to :json

  def index
    respond_with Contact.all
  end

  def create
    respond_with Contact.create(params[:contact])
  end
end
