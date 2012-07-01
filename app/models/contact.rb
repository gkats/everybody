class Contact < ActiveRecord::Base
  has_many :phones, dependent: :destroy
  
  accepts_nested_attributes_for :phones, allow_destroy: true
  
  attr_accessible :address, :group, :name, :notes, :phones_attributes
  
  validates_presence_of :name
end
