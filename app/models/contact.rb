class Contact < ActiveRecord::Base
  attr_accessible :address, :group, :name, :notes
  
  validates_presence_of :name
end
