# Generated by Django 3.0.7 on 2021-07-20 15:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('front', '0011_auto_20210720_2054'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='link_facebook',
            field=models.URLField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='project',
            name='link_github',
            field=models.URLField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='project',
            name='link_youtube',
            field=models.URLField(blank=True, default=''),
        ),
    ]
