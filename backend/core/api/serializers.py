from rest_framework.serializers import ModelSerializer
from ..models import Video, Comment

class VideoSerializer(ModelSerializer):
    class Meta:
        model = Video
        fields = ('id', 'title', 'description', 'video_file', "created_at", "likes", "unlikes")

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'video', 'text', 'created_at', "likes", "unlikes")