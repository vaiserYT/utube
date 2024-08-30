from rest_framework.viewsets import ModelViewSet
from ..models import Video, Comment
from .serializers import VideoSerializer, CommentSerializer
from rest_framework import mixins, generics

class VideoViewSet(ModelViewSet):
    queryset = Video.objects.order_by("-likes")
    serializer_class = VideoSerializer

class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.order_by("-created_at")
    serializer_class = CommentSerializer

