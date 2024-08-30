from django.db import models

class Video(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    video_file = models.FileField(upload_to='videos')
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)
    unlikes = models.IntegerField(default=0)
    
    def __str__(self) -> str:
        return self.title
    
class Comment(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)
    unlikes = models.IntegerField(default=0)

    def __str__(self) -> str:
        return self.text