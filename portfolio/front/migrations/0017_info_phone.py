# Generated by Django 3.0.7 on 2021-07-21 23:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('front', '0016_info_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='info',
            name='phone',
            field=models.CharField(blank=True, default='', max_length=20),
        ),
    ]
