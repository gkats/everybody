class Phone < ActiveRecord::Base
  belongs_to :contact

  attr_accessible :number, :kind, :contact_id
  
  validates_presence_of :number, :kind
  validates_format_of :number, with: /\d/
  
  KINDS = ['Mobile', 'Home', 'Work', 'Other']
end
