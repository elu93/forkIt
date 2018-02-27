class Restaurant < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :foods, dependent: :destroy
end
