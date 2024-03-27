from rest_framework import serializers

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'title','barcode','available')