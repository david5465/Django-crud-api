# Generated by Django 5.0.3 on 2024-04-03 05:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='sku',
            field=models.CharField(default=77777, max_length=255, unique=True),
            preserve_default=False,
        ),
    ]