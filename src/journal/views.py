from flask import Blueprint, render_template
from flask_login import login_required

journal_bp = Blueprint("journal", __name__)


@journal_bp.route("/journal")
@login_required
def index():
    return render_template('journal/index.html')