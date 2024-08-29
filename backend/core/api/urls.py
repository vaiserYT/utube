from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import VideoViewSet

post_router = DefaultRouter()
post_router.register(r'videos', VideoViewSet, basename='viedeos')