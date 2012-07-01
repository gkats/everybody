class Phone < ActiveRecord::Base
  belongs_to :contact

  attr_accessible :number, :kind, :contact_id
  
  validates_format_of :number, with: /\d/
  validates_inclusion_of :kind, in: %w(Mobile Home Work Other)
end
