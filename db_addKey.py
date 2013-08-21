#!flask/bin/python

from app.models import Food, FoodKey
from app import db

mainCategories = ['baked products', 'beans legume products', 'beef products', 'beverages', 'breakfast cereals', 'cereal grains pasta', 'dairy egg products', 'ethnic foods', 'fast foods', 'fats oils', 'fish seafood products', 'fruits fruit juices', 'lamb veal game products', 'meals entrees sidedishes', 'nut seed products', 'pork products', 'poultry products', 'sausages deli meats', 'snacks', 'soups sauces gravies', 'spices herbs', 'sweets', 'vegetables']
for cat in mainCategories:
	print cat
	foodInCat = Food.query.filter(Food.mainType == cat)
	for eachFood in foodInCat:
		tag = eachFood.tag
		tagList = tag.split()
		for eachTag in tagList:
			eachKey = FoodKey(keyid = eachFood.id, word = eachTag)
 	 		db.session.add(eachKey)
 	 	db.session.commit()

		