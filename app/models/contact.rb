class Contact < ActiveRecord::Base
  validates_presence_of :name

  attr_accessible :name, :group, :address, :notes
end
