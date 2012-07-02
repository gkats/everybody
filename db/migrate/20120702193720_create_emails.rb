class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :address
      t.string :kind
      t.references :contact
      
      t.timestamps
    end
  end
end
