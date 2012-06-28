class Phone < ActiveRecord::Base
  belongs_to :contact

  attr_accessible :number, :type, :contact_id
  
  validates_presence_of :number, :type
  validates_format_of :number, with: /\d/
  
  TYPES = ['Mobile', 'Home', 'Work', 'Other']
end
