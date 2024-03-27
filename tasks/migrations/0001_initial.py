# Generated by Django 5.0.3 on 2024-03-27 01:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('brand', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('cost_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('sale_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('barcode', models.CharField(max_length=255, unique=True)),
                ('available', models.BooleanField(default=True)),
                ('supplier', models.CharField(blank=True, max_length=255, null=True)),
                ('category', models.CharField(blank=True, max_length=255, null=True)),
                ('tax', models.DecimalField(decimal_places=2, default=0.0, max_digits=5)),
            ],
        ),
    ]
