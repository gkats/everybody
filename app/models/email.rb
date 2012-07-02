class Email < ActiveRecord::Base
  belongs_to :contact
  
  attr_accessible, :address, :kind, :contact_id
  
  validates_format_of :address, with: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i
  validates_inclusion_of :kind, in: %w[Home Work Other]
end
