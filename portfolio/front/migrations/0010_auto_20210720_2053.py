# Generated by Django 3.0.7 on 2021-07-20 15:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('front', '0009_info_show'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='link_facebook',
            field=models.URLField(default=''),
        ),
        migrations.AddField(
            model_name='project',
            name='link_github',
            field=models.URLField(default=''),
        ),
        migrations.AddField(
            model_name='project',
            name='link_youtube',
            field=models.URLField(default=''),
        ),
        migrations.AddField(
            model_name='project',
            name='name',
            field=models.CharField(default='', max_length=10),
        ),
        migrations.AddField(
            model_name='project',
            name='person',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='front.Info'),
        ),
    ]
