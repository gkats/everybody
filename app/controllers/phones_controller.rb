class PhonesController < ApplicationController
  respond_to :json
  
  # GET /api/contacts/:contact_id/phones
  def index
    respond_with Phone.where(contact_id: params[:contact_id])
  end
  
end
