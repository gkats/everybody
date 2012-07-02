class EmailsController < ApplicationController
  respond_to :json
  
  # GET /api/contacts/:contact_id/emails
  def index
    respond_with Email.where(contact_id: params[:contact_id])
  end
end
