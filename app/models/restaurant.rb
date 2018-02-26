class Restaurant < ApplicationRecord
    has_many :posts, dependent: :destroy
end
