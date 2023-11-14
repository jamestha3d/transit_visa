from django.db import models

# Create your models here.

#Nationality, Visa, residence, airport all tie to country model
class Nationality(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()

    def __str__(self):
        return f"Country: {self.title}"

class Residence(models.Model):
    pass

class Visas(models.Model):
    pass

class Airport(models.Model):
    pass

class Country(models.Model):
    pass

class Duration(models.Model):
    pass

"""
You are exempted from applying for a transit visa if one of the following applies to you:

    You already have a valid visa for the country in which you will transit.
    You hold a valid diplomatic passport.
    Your country has a bilateral agreement with your transit country.
    You won’t be leaving the transit zone (for nationals of specific countries).
    Your transition period will be less than 24 hours (not in all countries).

"""