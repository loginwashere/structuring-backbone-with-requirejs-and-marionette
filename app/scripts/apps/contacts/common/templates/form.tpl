<form class="form-horizontal" role="form">
    <div class="form-group">
        <label for="contact-firstName" class="col-sm-3 control-label">First name:</label>

        <div class="col-sm-9">
            <input id="contact-firstName" class="form-control" name="firstName" type="text" value="<%= firstName %>"/>
        </div>
    </div>
    <div class="form-group">
        <label for="contact-lastName" class="col-sm-3 control-label">Last name:</label>

        <div class="col-sm-9">
            <input id="contact-lastName" class="form-control" name="lastName" type="text" value="<%= lastName %>"/>
        </div>
    </div>
    <div class="form-group">
        <label for="contact-phoneNumber" class="col-sm-3 control-label">Phone number:</label>

        <div class="col-sm-9">
            <input id="contact-phoneNumber" class="form-control" name="phoneNumber" type="text"
                   value="<%= phoneNumber %>"/>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button class="btn js-submit">Save</button>
        </div>
    </div>
</form>