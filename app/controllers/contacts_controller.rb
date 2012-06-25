class ContactsController < ApplicationController
  respond_to :json
  
  # GET /api/contacts.json
  def index
    respond_with Contact.all
  end
  
  # GET /api/contacts/new.json
  def new
    respond_with Contact.new
  end
  
  # POST /api/contacts.json
  def create
    respond_with Contact.create(params[:contact])
  end
  
  # GET /api/contacts/1/edit.json
  def edit
    respond_with Contact.find(params[:id])
  end
  
  # PUT /api/contacts/1/edit.json
  def update
    respond_with Contact.update(params[:id], params[:contact])
  end
  
  # DELETE /api/contacts/1.json
  def destroy
    respond_with Contact.destroy(params[:id])
  end
end
