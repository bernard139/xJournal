from flask import Blueprint, render_template
from flask_login import login_required

trade_history_bp = Blueprint("trade_history", __name__)


@trade_history_bp.route("/trade_history")
@login_required
def index():
    return render_template('trade_history/index.html')