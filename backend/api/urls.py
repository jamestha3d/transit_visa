from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import NationalityViewSet

api_router = DefaultRouter()
api_router.register(r'nationality', NationalityViewSet)


