class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.text :description
      t.string :mediaurl
      t.integer :user_id
      t.integer :height
      t.integer :width
      t.string :mediadatatype
      t.integer :printtype, default: 1
      t.string :printheight
      t.string :printwidth
      t.integer :frame_id
      t.integer :album_id
      t.boolean :is_ordered, default: false
      t.boolean :is_shipped, default: false

      t.timestamps null: false
    end
  end
end
